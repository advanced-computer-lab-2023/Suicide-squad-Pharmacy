const express = require('express');
const router = express.Router();

const upload = require('./multer-config');

// Administrator Controller
const {
    addAdmin,
    removePatientOrPharmacist,
    infosOfAPharmacistRequest,
    infosOfRequestsByPharmacist,
    availableMedicinesDetailsByAdmin,
    pharmacistInfo,
    allPharmacists,
    allPatients,
    patientInfo,
    addPharmacist,
    acceptOrRejectPharmacistRequest
} = require('../Controllers/administratorController');

// Guest Controller
const {
    registerPatient,
    submitRequestToBePharmacist
}= require('../Controllers/guestController');

// Patient Controller
const {
    availableMedicinesDetailsByPatient, 
    getMedicineByName, 
    getMedicineByMedicalUse,
    choosePaymentMethod,
    addAddressToPatient,
    getPatientAddresses,
    getOrderDetails,
    cancelOrder,
    viewCartItems,
    removeAnItemFromCart,
    addMedicineToCart,
    updateMedicineQuantityInCart,
    login,
    logout,
    checkoutOrder,
    payForOrder
} = require('../Controllers/patientController');

// Pharmacist Controller
const {
    availableMedicinesDetailsByPharmacist,
    availableMedicinesQuantity,
    medQuantityAndSales,
    addMedicine, 
    updateMed
} = require('../Controllers/pharmacistController');

//Routes of Administrator
router.post('/AddAdmin', addAdmin);
router.post('/AddPharmacist', addPharmacist);
router.delete('/RemovePatientOrPharmacist/:Username', removePatientOrPharmacist);
router.get('/InfosOfAPharmacistRequest/:Username', infosOfAPharmacistRequest);
router.get('/InfosOfRequestsByPharmacist', infosOfRequestsByPharmacist);
router.get('/AvailableMedicinesDetailsByAdmin', availableMedicinesDetailsByAdmin);
router.get('/PharmacistInfo/:Username', pharmacistInfo);
router.get('/AllPharmacists', allPharmacists);
router.get('/AllPatients', allPatients);
router.get('/PatientInfo/:Username', patientInfo);
router.get('/MedicineByName/:Name',getMedicineByName);
router.get('/MedicineByMedicalUse/:MedicalUse',getMedicineByMedicalUse);
router.post('/AcceptOrRejectPharmacistRequest/:Username', acceptOrRejectPharmacistRequest);

// Routes of Guest
router.post('/RegisterPatient', registerPatient);
router.post('/SubmitRequestToBePharmacist', upload.fields([
    { name: 'IDDocument', maxCount: 1 },
    { name: 'PharmacyDegreeDocument', maxCount: 1 },
    { name: 'WorkingLicenseDocument', maxCount: 1 },
  ]), submitRequestToBePharmacist);

// Routes of Patient
router.get('/AvailableMedicinesDetailsByPatient',availableMedicinesDetailsByPatient);
router.get('/MedicineByName/:Name',getMedicineByName);
router.get('/MedicineByMedicalUse/:MedicalUse',getMedicineByMedicalUse);
router.put('/choosePaymentMethod/:username/:orderId', choosePaymentMethod);
router.post('/AddAddressToPatient/:Username', addAddressToPatient); 
router.get('/GetPatientAddresses/:Username', getPatientAddresses); 
router.get('/GetOrderDetails/:Username', getOrderDetails);
router.put('/CancelOrder/:orderId', cancelOrder); 
router.get('/viewCartItems/:Username',viewCartItems);
router.delete('/removeItemFromCart/:Username/:MedicineName',removeAnItemFromCart);
router.post('/addMedicineToCart/:Username/:MedicineName',addMedicineToCart);
router.put('/updateQuantity/:Username/:MedicineName/:quantity',updateMedicineQuantityInCart);
router.post('/login',login);
router.get('/logout',logout);
router.post('/checkoutOrder/:Username', checkoutOrder);
router.put('/payForOrder/:orderId/:paymentMethod', payForOrder)

// Routes of Pharmacist
router.get('/AvailableMedicinesDetailsByPharmacist',availableMedicinesDetailsByPharmacist);
router.get('/AvailableMedicinesQuantity',availableMedicinesQuantity);
router.get('/MedQuantityAndSales/:Name',medQuantityAndSales);
router.post('/AddMedicine', upload.single('Picture'), addMedicine);
router.put('/UpdateMed/:Name',updateMed);
router.get('/MedicineByName/:Name',getMedicineByName);
router.get('/MedicineByMedicalUse/:MedicalUse',getMedicineByMedicalUse);

module.exports = router;