import { Template } from 'meteor/templating';

import { ReactiveDict } from 'meteor/reactive-dict';

// collections
import { Assistants } from '../api/assistants.js';
import { Clinics } from '../api/clinics.js';


import './body.html';
import './home_tab.html';
// import './patients_tab.html';
import './consultation_status_tab.html';
import './procedure_register_tab.html';
import './consultation_list_tab.html';
import './procedure_list_tab.html';
import './procedure_list_tab.js';
import './phone_numbers_list_tab.html';
import './admin_tab.html';
import './help_tab.html';
import './subs.html';

Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('assistants');
  Meteor.subscribe('clinics');
  Meteor.subscribe('procedures');
});

Template.body.helpers({
  tasks: [{
    text: 'This is task 1'
  }, {
    text: 'This is task 2'
  }, {
    text: 'This is task 3'
  }, ]
});

Template.procedureTab.helpers({
  assistants() {
    return Assistants.find({});
  },
  clinics() {
    return Clinics.find({});
  },
  procedures1: [{
    name: 'Acrylic crown'
  }, {
    name: 'Acrylic splint'
  }, {
    name: 'Alginate impression'
  }, {
    name: 'Alveoloplasty I'
  }, {
    name: 'Alveoloplasty II'
  }, {
    name: 'Amalgam CL 1'
  }, {
    name: 'Amalgam CL 2'
  }, {
    name: 'Anal dilator'
  }, {
    name: 'Apisectomy'
  }, {
    name: 'Appliance adjustment'
  }, {
    name: 'Arch bar removal'
  }, {
    name: 'Arch bar splinting'
  }, {
    name: 'Biopsy'
  }, {
    name: 'biopsy bone'
  }, {
    name: 'biopsy labial gland'
  }, {
    name: 'biopsy mucocele excision'
  }, {
    name: 'Bipps pack change'
  }, {
    name: 'Bridge cementation'
  }, {
    name: 'Cautery'
  }, {
    name: 'CD Delivery'
  }, {
    name: 'CD Final Impression lower'
  }, {
    name: 'CD Final Impression U/L'
  }, {
    name: 'CD Final Impression upper'
  }, {
    name: 'CD Jaw relations'
  }, {
    name: 'CD Primary Impression'
  }, {
    name: 'CD Tryin'
  }, {
    name: 'Ceramic crown'
  }, {
    name: 'Consultation'
  }, {
    name: 'consultation ward'
  }, {
    name: 'Crown cementation'
  }, {
    name: 'Crown prep (single unit)'
  }, {
    name: 'Debridement and suturing'
  }, {
    name: 'Dental Implant'
  }, {
    name: 'Diagnostic temporary'
  }, {
    name: 'E/O dressing change'
  }, {
    name: 'Extraction Grade 1'
  }, {
    name: 'Extraction Grade 2'
  }, {
    name: 'Extraction Grade 3'
  }, {
    name: 'Extraction root # and retreived'
  }, {
    name: 'Fixed partial denture'
  }, {
    name: 'Follow up'
  }, {
    name: 'GIC (2-4 ab ) quadrant'
  }, {
    name: 'GIC 1'
  }, {
    name: 'GIC 2'
  }, {
    name: 'Group counseling'
  }, {
    name: 'Hawleys appliance delivery'
  }, {
    name: 'Hawleys impression'
  }, {
    name: 'IMF'
  }, {
    name: 'Impaction 1'
  }, {
    name: 'Impaction 2'
  }, {
    name: 'Implant procedure'
  }, {
    name: 'Incision and drainage'
  }, {
    name: 'LA Inf. Alv. N block'
  }, {
    name: 'LA infiltration'
  }, {
    name: 'LCR  ant. class 3'
  }, {
    name: 'LCR core build up'
  }, {
    name: 'LCR for diasthema closure'
  }, {
    name: 'LCR posterior class 1'
  }, {
    name: 'LCR posterior class 2'
  }, {
    name: 'LCR splinting'
  }, {
    name: 'LCR veneer'
  }, {
    name: 'Max obturator delivery'
  }, {
    name: 'Max obturator impression'
  }, {
    name: 'Max plate delivery'
  }, {
    name: 'Max plate impression'
  }, {
    name: 'Metal crown'
  }, {
    name: 'Minor cyst enucleation'
  }, {
    name: 'Minor surgery'
  }, {
    name: 'Occlusal grinding'
  }, {
    name: 'Open removal of roots'
  }, {
    name: 'PD Delivery'
  }, {
    name: 'PD impression'
  }, {
    name: 'PD Jaw relations'
  }, {
    name: 'PD Tryin'
  }, {
    name: 'Periapical xray'
  }, {
    name: 'Perio currettage (quadrant)'
  }, {
    name: 'Perio Currettage (segment)'
  }, {
    name: 'Perio surgery (quadrant)'
  }, {
    name: 'Perio surgery (segment)'
  }, {
    name: 'Post and core'
  }, {
    name: 'Quadrant Ext. Grade 1'
  }, {
    name: 'Quadrant ext. Grade 2'
  }, {
    name: 'RCT BMP anterior'
  }, {
    name: 'RCT BMP molar II'
  }, {
    name: 'RCT BMP posterior'
  }, {
    name: 'RCT BMP Premolar'
  }, {
    name: 'RCT obturation Anterior'
  }, {
    name: 'RCT obturation molar II'
  }, {
    name: 'RCT obturation Posterior'
  }, {
    name: 'RCT obturation Premolar'
  }, {
    name: 'RCT pulp extirpation'
  }, {
    name: 'RCT pulp extirpation molar'
  }, {
    name: 'RCT single sitting  Anterior'
  }, {
    name: 'RCT single sitting molar'
  }, {
    name: 'RCT single sitting premolar'
  }, {
    name: 'Review (endo)'
  }, {
    name: 'Review / Follow up'
  }, {
    name: 'Review / Follow up (Prostho)'
  }, {
    name: 'Rubber base impression'
  }, {
    name: 'Scaling 1'
  }, {
    name: 'Scaling 2'
  }, {
    name: 'Scaling 3'
  }, {
    name: 'Study models'
  }, {
    name: 'Surgical extraction'
  }, {
    name: 'Suture removal'
  }, {
    name: 'Suturing'
  }, {
    name: 'Temporary crown cementation'
  }, {
    name: 'Temporary filling'
  }, {
    name: 'Tie Wire removal'
  }, {
    name: 'trismus screw delivery'
  }, {
    name: 'Vestibuloplasty]'
  }],
  localanesthesias: [{
    name: 'Infiltration'
  }, {
    name: 'Inf alv. N block'
  }],
  sexs: [{
    name: 'Male'
  }, {
    name: 'Female'
  }]

});


Template.consultationTab.helpers({
  assistants() {
    return Assistants.find({});
  },
  consulttypes: [{
    name: 'General'
  }, {
    name: 'Private OP'
  }, {
    name: 'Private IP'
  }, {
    name: 'Staff'
  }, {
    name: 'Staff Dependent'
  }, {
    name: 'Student'
  }, {
    name: 'Retired Staff'
  }, {
    name: 'Retired Staff Dependent'
  }],
  roomnos: [{
    name: 'Chittoor CMC Dental clinic'
  }],
  statuses: [{
    name: ''
  }],
  sexs: [{
    name: 'Male'
  }, {
    name: 'Female'
  }],
  dentalneglectsubtypes: [{
    name: 'High Caries'
  }, {
    name: 'Periodontal Disease'
  }, {
    name: 'Habit Related'
  }, {
    name: 'Abrasive Related'
  }, {
    name: 'HC + PD'
  }],
  habitss: [{
    name: 'Nil'
  }, {
    name: 'Chewing'
  }, {
    name: 'Smoking'
  }, {
    name: 'Chewing and Smoking'
  }, {
    name: 'Smoking and Liquor'
  }, {
    name: 'Chewing and Liquor'
  }, {
    name: 'Smoking, Chewing and Liquor'
  }],
  counsellingdones: [{
    name: 'Oral Hygiene'
  }, {
    name: 'Diet'
  }, {
    name: 'Habit'
  }],
  interestingcasecategorys: [{
    name: ''
  }]
});