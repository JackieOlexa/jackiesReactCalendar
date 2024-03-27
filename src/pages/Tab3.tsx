import { IonAlert, IonButton, IonButtons, IonRow, IonCol, IonCard, IonContent, IonGrid, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Card from '../components/apiContainer';
import './Tab3.css';
import { useState } from 'react';
import EventItem from '../components/EventItem';
import { getHolidays, db } from '../util/firebase';
//import { collection, query, where, doc, getDoc } from "firebase/firestore";

const Tab3: React.FC = () => {
  const [response, setResponse] = useState([]);

  getHolidays(db).then((doc) => {
    setResponse(doc.curren)
    console.log(response)
  })

  //const eventsRef = collection(db, "PersonalEvents");
  //const idsmaybe = eventsRef.path;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle><div className='myDesign'>Events and Holidays</div></IonTitle>
          <IonButtons slot="end">
            <IonButton href="/logOut">Log Out</IonButton>
            <IonButton href="/login">Change Account</IonButton>
            <IonButton href="/createAccount">Create Account</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonTitle><h1 className="myDesign">Personal Events</h1></IonTitle>
                <IonCard className='card-center-1'>
                  <EventItem id="event-1" completed={false} name="Dinner and Trivia" location="Stave 'n Hoop" date="03/27/2024"></EventItem>
                  <EventItem id="event-1" completed={false} name="Trail Ride w/ Judy" location="Upper Rattlesnake" date="03/30/2024"></EventItem>
                  <EventItem id="event-1" completed={false} name="UMCUR" location="UC Ballroom" date="04/19/2024"></EventItem>
                </IonCard>
                <>
                  <IonCard className='card-center-2'>
                    <IonButton className='myDesign' id="present-alert">Add New Event</IonButton>
                  </IonCard>
                  <IonAlert trigger="present-alert" header="Add your event info" buttons={["Add"]} inputs={[
                    { placeholder: 'Event Name' },
                    { placeholder: 'Event Date' },
                    { placeholder: 'Event Location' },
                  ]}></IonAlert>
                </>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard>
                <IonTitle><h1 className="myDesign">US Holidays</h1></IonTitle>
                {response.map((item) =>
                  <Card {...item as any} />
                )}
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
