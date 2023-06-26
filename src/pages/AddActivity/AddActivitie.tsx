import {  IonButtons, IonCol, IonContent, IonHeader, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const AddActivity: React.FC = () => {
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonButtons slot='start'>
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Add activity</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonRow>
                    <IonCol>
                        <h1>Add activitity work!</h1>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
};

export default AddActivity;