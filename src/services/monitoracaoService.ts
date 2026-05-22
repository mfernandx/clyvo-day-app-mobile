import AsyncStorage from "@react-native-async-storage/async-storage";
import {Monitoramento} from "../model/Monitoramento";

const KEY = "@clyvoday_monitoramentos";

export async function salvaMonitoramento(monitoramento: Monitoramento) {

  const data = await carregaMonitoramentos();

  data.push(monitoramento);

  await AsyncStorage.setItem(KEY,JSON.stringify(data));
}

export async function carregaMonitoramentos():Promise<Monitoramento[]> {

  const data = await AsyncStorage.getItem(KEY);

  if (!data) {
    return [];
  }

  return JSON.parse(data);
}