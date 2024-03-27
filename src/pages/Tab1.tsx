import { IonButton, IonButtons, IonDatetime, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { useState } from 'react';

const Tab1: React.FC = () => {

  //var [importantDays, setImportantDays] = useState("1,2,3,4");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle><div class='myDesign'>Calendar Overview</div></IonTitle>
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
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard class='card-center'> <IonDatetime></IonDatetime></IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
