import { useHistory } from 'react-router-dom'

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const history = useHistory()
    function onAddMeetupHandler(meetupData) {
        fetch(
            "https://react-meetup-bee0f-default-rtdb.firebaseio.com/meetups.json",
            {
                method:'POST',
                body: JSON.stringify(meetupData),
                headers:{
                    'Content-Type' : 'application/json'
                }
            }
        ).then(() => {
            history.push('/')
        });
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
        </section>
    );
}
export default NewMeetupPage;
