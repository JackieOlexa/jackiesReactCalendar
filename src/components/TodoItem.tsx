import React from 'react';
import { IonCheckbox, IonButtons, IonButton, IonContent, IonItem, IonLabel, IonList } from '@ionic/react';
import "./TodoItem.css"


function TodoItem(props) {
  return (
    <IonItem>
      <IonCheckbox class='myDesign-1' labelPlacement="end" justify="start" id={props.id} checked={props.completed}>{props.name} | {props.dueDate}</IonCheckbox>
      <IonButtons slot='end'>
        <IonButton>Edit</IonButton>
        <IonButton>Delete</IonButton>
      </IonButtons>
    </IonItem>
  );
};

export default TodoItem;
