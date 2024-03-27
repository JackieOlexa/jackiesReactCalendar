import { IonText, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './LogOut.css';

const LogOut: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Account Log Out</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Tab 3</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonCard class="myDesign">
                    <IonText><h1 class="myDesign">Are you sure you want to log out?</h1></IonText>
                    <h1 class="myDesign"><IonButton class="myDesign" href="/login">Yes, log me out.</IonButton></h1>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default LogOut;