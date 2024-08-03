import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore"
import app from "."
import bcrypt from "bcrypt"

// Inisialisasi firestore menggunakan app dari firebase
const firestore = getFirestore(app)

/**
 * Fungsi untuk mengambil semua data dari collection yang ditentukan
 * @param collectionName nama collection yang ingin diambil data nya
 * @returns array data yang berisi id dan data dari setiap document
 */
export const retrieveData = async (collectionName: string) => {
  // Mendapatkan snapshot dari semua document dalam collection yang ditentukan
  const snapshot = await getDocs(collection(firestore, collectionName))
  // Mengubah data dari snapshot menjadi array dan mengembalikan nilainya
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
  return data
}

/**
 * Fungsi untuk mengambil data dari collection berdasarkan field dan value yang ditentukan
 * @param collectionName nama collection yang ingin diambil data nya
 * @param field nama field yang ingin dibandingkan
 * @param value nilai yang ingin dibandingkan dengan field
 * @returns array data yang berisi id dan data dari setiap document yang memenuhi kondisi
 */
export const retrieveDataById = async (
  collectionName: string,
  field: string,
  value: string
) => {
  // Membuat query berdasarkan field dan value yang ditentukan
  const q = query(
    collection(firestore, collectionName),
    where(field, "==", value)
  )
  // Mendapatkan snapshot dari document dalam collection yang memenuhi query
  const snapshot = await getDocs(q)
  // Mengubah data dari snapshot menjadi array dan mengembalikan nilainya
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
  return data
}

/**
 * Fungsi untuk menambahkan data baru ke collection yang ditentukan
 * @param collectionName nama collection yang ingin ditambahkan data nya
 * @param data data yang ingin ditambahkan
 * @returns referensi dari document yang baru ditambahkan
 */
export const addData = async (collectionName: string, data: any) => {
  // Menambahkan document baru ke collection yang ditentukan dengan data yang ditentukan
  const docRef = await addDoc(collection(firestore, collectionName), data)
  // Mengembalikan referensi dari document yang baru ditambahkan
  return docRef
}

/**
 * Fungsi untuk mengedit data di dalam collection berdasarkan id dan field yang ditentukan
 * @param collectionName nama collection yang ingin diedit
 * @param id id dari document yang ingin diedit
 * @param field nama field yang ingin diedit
 * @param value nilai yang ingin diubah
 * @returns promise yang akan selesai jika edit berhasil
 */
export const editData = async (
  collectionName: string,
  id: string,
  field: string,
  value: any
) => {
  // Mendapatkan referensi ke document yang ingin diedit
  const docRef = doc(firestore, collectionName, id)
  // Mengedit field yang ditentukan dengan nilai yang ditentukan
  const result = await updateDoc(docRef, {
    [field]: value,
  })
  return result
}

/**
 * Fungsi untuk menghapus data di dalam collection berdasarkan id
 * @param collectionName nama collection yang ingin dihapus data nya
 * @param id id dari document yang ingin dihapus
 * @returns promise yang akan selesai jika hapus berhasil
 */
export const deleteData = async (collectionName: string, id: string) => {
  // Mendapatkan referensi ke document yang ingin dihapus
  const docRef = doc(firestore, collectionName, id)
  // Menghapus document yang ditentukan
  const result = await deleteDoc(docRef)
  return result
}

export const register = async (req: any) => {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", req.email)
  )
  const snapshot = await getDocs(q)
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
  if (data.length > 0) {
    return new Error("Email already exists")
  } else {
    req.role = "member"
    req.password = bcrypt.hashSync(req.password, 10)
    const docRef = await addDoc(collection(firestore, "users"), req)
    return docRef.path.split("/")[1]
  }
}

export const login = async (email: string) => {
  const q = query(collection(firestore, "users"), where("email", "==", email))
  const snapshot = await getDocs(q)
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
  if (data.length > 0) {
    return data[0]
  } else {
    return new Error("Email or password is incorrect")
  }
}
