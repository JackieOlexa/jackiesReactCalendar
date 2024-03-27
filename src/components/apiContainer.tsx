import { IonText, IonCard, IonCardContent } from '@ionic/react';
import React from "react";

export default function Card(feed: any) {
    let text = feed
    return (
        <IonText>{String(text)}</IonText>
    )
}







