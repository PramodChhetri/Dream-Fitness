import InputError from '@/Components/InputError';
import { Button } from '@/Components/ui/button';
import { Label } from '@/Components/ui/label';
import { Textarea } from '@/Components/ui/textarea';
import { ToggleGroup, ToggleGroupItem } from '@/Components/ui/toggle-group';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { useForm } from '@inertiajs/react';
import axios from 'axios';
import { FormEvent, useState } from 'react';

type ContactType = 'all' | 'active' | 'lifetime' | 'yearly' | 'expired';

const index = ({ auth, flash, sms_balance }: PageProps<{ sms_balance: number }>) => {
  const { data, setData, errors, post, processing } = useForm({
    contacts: [] as string[],
    message: '',
  });

  const [totalPages, setTotalPages] = useState(1);
  const [totalDisplayCharacters, setTotalDisplayCharacters] = useState(160);
  const [balance, setBalance] = useState(0);

  const fetchContacts = (type: ContactType) => {
    const endpoints: { [key in ContactType]: string } = {
      all: '/all-contacts',
      active: '/active-contacts',
      lifetime: '/lifetime-members-contacts',
      yearly: '/yearly-members-contacts',
      expired: '/expired-contacts',
    };

    const endpoint = endpoints[type];
    if (!endpoint) return;

    axios.get(endpoint)
      .then(response => {
        const contacts = response.data.map((contact: { phone: string }) => contact.phone);
        setData('contacts', contacts);
      })
      .catch(error => {
        console.error('There was an error fetching the contacts!', error);
      });
  };


  const handleMessageChange = (message: string) => {
    const totalCharacters = message.length;
    const totalPages = Math.max(Math.ceil(totalCharacters / 160), 1); // Minimum page should be 1
    setTotalPages(totalPages);
    setTotalDisplayCharacters(totalPages * 160);
  };

  const handleSubmit = (e: FormEvent) => {
    // Validate data before submission
    if (!data.contacts.length || !data.message.trim()) {
      console.error('Contacts and Message are required');
      return;
    }

    console.log(data);

    // Proceed with submission
    post('/send-message');

  };



  return (
    <AuthenticatedLayout user={auth.user}>
      <header className='flex justify-between'>
        <h1 className='text-xl font-semibold'>Send Message</h1>
        {
          sms_balance < 0 ?
            <span className="text-muted-foreground">SMS service unavailable</span>
            :
            <span className='text-card-foreground'>Balance: Rs {sms_balance}</span>
        }
      </header>

      <form className='space-y-3' onSubmit={handleSubmit}>
        <ToggleGroup type='single' variant={'outline'} onValueChange={(value) => fetchContacts(value as ContactType)}>
          <ToggleGroupItem value='all' aria-label='All Users'>All</ToggleGroupItem>
          <ToggleGroupItem value='active' aria-label='All Active Users'>Active</ToggleGroupItem>
          <ToggleGroupItem value='lifetime' aria-label='All Lifetime Users'>Lifetime Members</ToggleGroupItem>
          <ToggleGroupItem value='yearly' aria-label='All Yearly Users'>Yearly Members</ToggleGroupItem>
          <ToggleGroupItem value='expired' aria-label='All Expired Users'>Expired Members</ToggleGroupItem>
        </ToggleGroup>
        <div>
          <Label htmlFor='contacts'>Contacts</Label>
          <Textarea
            id='contacts'
            required
            value={data.contacts.join(', ')} // Display contacts as a comma-separated string
            onChange={e => setData('contacts', e.target.value.split(',').map(c => c.trim()))} // Update contacts as an array
            placeholder='Comma Separated contact numbers'
          ></Textarea>
          <InputError message={errors.contacts} />
        </div>
        <div>
          <Label htmlFor='message'>Message</Label>
          <Textarea
            id='message'
            required
            value={data.message}
            onChange={e => { setData('message', e.target.value); handleMessageChange(e.target.value) }}
            placeholder='Enter message to the members'
          ></Textarea>
          <InputError message={errors.message} />
          <div className="text-muted-foreground mt-2 flex justify-between">
            <span>
              Total Pages : {totalPages} - (Rs {(totalPages * data.contacts.length * 1.4).toFixed(2)})
            </span>
            <span>
              {data.message.length} / {totalDisplayCharacters}
            </span>
          </div>
        </div>
        <Button type='submit' disabled={sms_balance <= 0}>Send SMS Alert </Button>
      </form>
    </AuthenticatedLayout>
  );
};

export default index;
