import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonMenu, IonMenuToggle, IonRouterOutlet, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import AllActivities from './pages/AllActivities/AllActivities';
import AddActivity from './pages/AddActivity/AddActivitie';
import { bodyOutline, newspaperOutline } from 'ionicons/icons';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu side='start' contentId="sheduleAppM1">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Shedule App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonMenuToggle>
            <IonItem routerLink="/all-activities" routerDirection="none" lines="none">
              <IonIcon color="medium" slot="start" icon={bodyOutline} />
              <IonLabel>All activities</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="/add-activity" routerDirection="none" lines="none">
              <IonIcon color="medium" slot="start" icon={newspaperOutline} />
              <IonLabel>Add activity</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet id="sheduleAppM1">
        <Route path="/all-activities" component={AllActivities} exact />
        <Route path="/add-activity" component={AddActivity} exact />
        <Redirect to="/all-activities" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
