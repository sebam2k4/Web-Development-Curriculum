# Banking On Ruby Project
# Using Account object with public methods to display balances and transfer funds
# Rely on private methods to make sure the user's PIN is correct before approving transactions.

class Account
    # name and balance are only readable attributes
    attr_reader :name, :balance
    # balance is default at 500 if no argument provided for it.
    def initialize(name, balance=100)
        @name = name
        @balance = balance
    end
    
    def display_balance(pin_number)
        # Using: boolean ? Do this if true: Do this if false (ternary conditional expression)
        puts pin_number == pin ? "Balance: $#{@balance}." : pin_error
    end
    
    def withdraw(pin_number, amount)
        if pin_number == pin
            @balance -= amount
            puts "Withdrew #{amount}. New balance: $#{@balance}."
        else
            puts pin_error
        end
    end
    
    def deposit(pin_number, amount)
        if pin_number == pin
            @balance += amount
            puts "Deposited #{amount}. New balance: $#{@balance}."
        else
            puts pin_error
        end
    end
    
    # Private methods
    private
    
    def pin
        @pin = 1234
    end
    
    def pin_error
        return "Access denied: incorrect PIN."
    end
end

checking_account = Account.new("Sebek", 750) # checking_account Instance

checking_account.display_balance(1234)
checking_account.withdraw(1234, 200)
checking_account.deposit(1234, 1800)
checking_account.withdraw(1234, 1_000_000)
checking_account.display_balance(1233)
