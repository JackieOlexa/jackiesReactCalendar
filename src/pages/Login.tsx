import { IonItem, IonButton, IonCard, IonContent, IonHeader, IonInput, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Login.css';

const Login: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Account Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Tab 3</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonCard className='acc-card-center-1'>
                    <h1 className='myDesign'>Welcome back! Please log in below.</h1>
                </IonCard>
                <IonCard className='acc-card-center-1'>
                    <form>
                        <IonItem><IonInput label="User ID" placeholder="Username or Email"></IonInput></IonItem>
                        <IonItem><IonInput label="Password" type="password" placeholder="*********"></IonInput></IonItem>
                        <IonCard className='acc-card-center-2'>
                            <IonButton className='myDesign' href='/'>Create Account</IonButton>
                        </IonCard>
                    </form>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Login;