import { IonCard, IonItem, IonInput, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './CreateAccount.css';

const CreateAccount: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Create Account</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Tab 3</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonCard className='acc-card-center'>
                    <h1 className='myDesign'>Welcome to your organizational dreams!</h1>
                    <h2 className='myDesign'>Please fill in the below information to get started</h2>
                </IonCard>
                <IonCard className='acc-card-center-1'>
                    <form>
                        <IonItem>
                            <IonInput label="Username" placeholder="Enter desired username"></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonInput label="Password" placeholder="Enter private password"></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonInput label="Email" placeholder="Enter email"></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonInput label="Country of Residence" placeholder="Enter country for locale-specific holidays"></IonInput>
                        </IonItem>
                        <IonCard className='acc-card-center-2'>
                            <IonButton className='myDesign' href='/login'>Create Account</IonButton>
                        </IonCard>
                    </form>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default CreateAccount;