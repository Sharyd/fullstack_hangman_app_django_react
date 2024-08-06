import axios from 'axios'
import { API_BASE_URL } from '../utils/constants'

export async function fetchData<T>(endpoint: string): Promise<T> {
    const { data } = await axios.get<T>(`${API_BASE_URL}${endpoint}`)
    return data
}
