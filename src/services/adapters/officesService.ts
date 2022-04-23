import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { Office } from '../models/intefaces';
import { db } from './firebaseInit';

export default class OfficesService {
  public officesDoc;
  constructor() {
    this.officesDoc = collection(db, 'offices');
  }
  async add (office: Office) {
    const officeRef = await addDoc(this.officesDoc, office);
    return officeRef;
  }
  async getAll () {
    const officesDocs = await getDocs(this.officesDoc);
    return officesDocs.docs.map(d =>  {return { id: d.id, ...d.data()}});
  }

  async get(officeId:string) {
    const officeDoc = await getDoc(doc(this.officesDoc, 'offices', officeId));
    return {id: officeDoc.id ,...officeDoc.data()};
  }

  async delete(officeId:string) {
    return await deleteDoc(doc(this.officesDoc, 'offices', officeId))
  }

  async update(officeData:any) {
    return await updateDoc(doc(this.officesDoc, 'offices', officeData.id), officeData)
  }
}
