import Transaction from '../models/Transaction';

interface TransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}
interface Balance {
  income: number;
  outcome: number;
  total: number;
  totalTransactions: number;
}

interface BankStatement {
  transactions: Transaction[];
  balance: Balance;
}

class TransactionsRepository {
  private transactions: Transaction[];

  public total: number;

  public income: number;

  public outcome: number;

  public totalTransactions: number;

  constructor() {
    this.transactions = [];
    this.total = 0;
    this.income = 0;
    this.outcome = 0;
    this.totalTransactions = 0;
  }

  public all(): TransactionDTO[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const balance = {
      total: this.total,
      income: this.income,
      outcome: this.outcome,
      totalTransactions: this.totalTransactions,
    };
    return balance;
  }

  public create({ title, value, type }: TransactionDTO): Transaction {
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
