import { collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../init/firebaseInit';

export default class WorkersService {
  public workersDoc;
  constructor() {
    this.workersDoc = collection(db, 'workers');
  }
  async getAll () {
    const workersDocs = await getDocs(this.workersDoc);
    return workersDocs.docs.map(d =>  {return { id: d.id, ...d.data()}});
  }

  async get(officeId:string) {
    const officeDoc = await getDoc(doc(this.workersDoc, 'workers', officeId));
    return {id: officeDoc.id ,...officeDoc.data()};
  }

  async delete(officeId:string) {
    return await deleteDoc(doc(this.workersDoc, 'workers', officeId))
  }

  async update(officeData:any) {
    return await updateDoc(doc(this.workersDoc, 'workers', officeData.id), officeData)
  }
}
