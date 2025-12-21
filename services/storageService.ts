import { AnalysisResult } from "../types";

const STORAGE_KEY = 'autoexpert_history_v1';

export const saveAnalysisToHistory = (analysis: AnalysisResult) => {
  try {
    const existing = getHistory();
    // Add to beginning, limit to last 20 items to prevent storage overflow
    const updated = [analysis, ...existing].slice(0, 20);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error("Failed to save history", error);
  }
};

export const getHistory = (): AnalysisResult[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Failed to load history", error);
    return [];
  }
};

export const clearHistory = () => {
  localStorage.removeItem(STORAGE_KEY);
};

export const deleteHistoryItem = (id: string) => {
  try {
    const existing = getHistory();
    const updated = existing.filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (error) {
    console.error("Failed to delete item", error);
    return [];
  }
};