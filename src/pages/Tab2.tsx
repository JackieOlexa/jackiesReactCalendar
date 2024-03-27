import { IonAlert, IonText, IonInput, IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton } from '@ionic/react';
import './Tab2.css';
import TodoItem from '../components/TodoItem';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle><div className="myDesign">To-Do List</div></IonTitle>
          <IonButtons slot="end">
            <IonButton href="/logOut">Log Out</IonButton>
            <IonButton href="/login">Change Account</IonButton>
            <IonButton href="/createAccount">Create Account</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen >
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle><div className="myDesign">To-Do List</div></IonTitle>
            <IonButtons slot="end">
              <IonButton href="/logOut">Log Out</IonButton>
              <IonButton href="/login">Change Account</IonButton>
              <IonButton href="/createAccount">Create Account</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonCard className="card-center">
          <TodoItem id="todo-0" name="Eat" dueDate="03/25/2024" completed={true} />
          <TodoItem id="todo-1" name="Sleep" dueDate="06/19/2102" completed={false} />
          <TodoItem id="todo-2" name="Repeat" dueDate="03/26/2024" completed={false} />
        </IonCard>
        <>
          <IonCard className='todo-card-center-1'>
            <IonButton className='myDesign' id="present-alert">Add New To-Do</IonButton>
          </IonCard>
          <IonAlert trigger="present-alert" header="Add your to-do info" buttons={["Add"]} inputs={[
            { placeholder: 'Task/Activity' },
            { placeholder: 'Due Date' },
          ]}></IonAlert>
        </>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
