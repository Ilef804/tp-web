export interface Question {
  id: number;
  question: string;
  options: string[];
  reponse: string;
  userAnswer?: string;
  answered?: boolean;
}
