import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/Components/ui/dropdown-menu";
import { Member } from "@/types/members";
import { Ellipsis } from "lucide-react";
import { useState } from "react";
import { ViewMemberDialog } from "./ViewMemberDialog";
import { DeleteMemberDialog } from "./DeleteMemberDialog";
import { getSubscriptionStatus } from "@/services/member-service";
import { SendMessageDialog } from "./SendMessageDialog";
import { MembershipPackage } from "@/types";
import RenewPackageDialog from "./RenewPackageDialog";
import { LockerDialog } from "./LockerDialog";
import EditLockerDialog from "./EditLockerDialog"; // Import the new dialog
import { EditMemberDialog } from "./EditMemberDialog";
import { MemberAccountsDialog } from "./MemberAccountsDialog";
import { ChangePackageDialog } from "./ChangePackageDialog";
import { ExtendLocker } from "./ExtendLocker";

export default function MemberTableActions({ member }: { member: Member }) {
    const [openView, setOpenView] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [openApprove, setOpenApprove] = useState(false);
    const [openAccounts, setOpenAccounts] = useState(false);
    const [openPackageChange, setOpenPackageChange] = useState(false);
    const [openSendMessage, setOpenSendMessage] = useState(false);
    const [openPackageRenew, setOpenPackageRenew] = useState(false);
    const [openLocker, setOpenLocker] = useState(false);
    const [openEditLocker, setOpenEditLocker] = useState(false);
    const [openExtendLocker, setOpenExtendLocker] = useState(false);

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger><Ellipsis /></DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setOpenView(true)}>View</DropdownMenuItem>
                    {
                        member.is_approved == 1 &&
                        <DropdownMenuItem onClick={() => setOpenEdit(true)}>Edit</DropdownMenuItem>
                    }
                    {
                        getSubscriptionStatus(member).text.toLowerCase() === "unapproved" &&
                        <DropdownMenuItem onClick={() => setOpenApprove(true)}>Approve</DropdownMenuItem>
                    }
                    <DropdownMenuItem onClick={() => setOpenPackageRenew(true)}>Renew</DropdownMenuItem>

                    {!member.active_locker ? (
                        <DropdownMenuItem onClick={() => setOpenLocker(true)}>Assign Locker</DropdownMenuItem>
                    ) : (
                        <>
                            <DropdownMenuItem onClick={() => setOpenEditLocker(true)}>Edit Locker Number</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setOpenExtendLocker(true)}>Extend Locker</DropdownMenuItem>
                        </>
                    )}
                    <DropdownMenuItem onClick={() => setOpenAccounts(true)}>Accounts</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setOpenPackageChange(true)}>Change Package</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setOpenSendMessage(true)}>Message</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setOpenDelete(true)}>Delete</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {/* Modals for actions */}
            <LockerDialog member={member} open={openLocker} onClose={() => setOpenLocker(false)} />
            <SendMessageDialog member={member} open={openSendMessage} onClose={() => setOpenSendMessage(false)} />
            <DeleteMemberDialog member={member} open={openDelete} onClose={() => setOpenDelete(false)} />
            <ViewMemberDialog member={member} open={openView} onClose={() => setOpenView(false)} />
            <RenewPackageDialog member={member} open={openPackageRenew} onClose={() => setOpenPackageRenew(false)} />
            <EditLockerDialog member={member} open={openEditLocker} onClose={() => setOpenEditLocker(false)} />
            <EditMemberDialog member={member} open={openEdit} onClose={() => { setOpenEdit(false) }} />
            <MemberAccountsDialog member={member} open={openAccounts} onClose={() => { setOpenAccounts(false) }} />
            <ChangePackageDialog member={member} open={openPackageChange} onClose={() => setOpenPackageChange(false)} />
            <ExtendLocker member={member} open={openExtendLocker} onClose={() => setOpenExtendLocker(false)} />
        </div>
    );
}
