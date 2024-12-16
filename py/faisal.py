class Snack:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def show_details(self):
        print(f"Snack: {self.name}, Price: ₹{self.price}")


class SnackBooking:
    def __init__(self):
        self.snacks = []

    def add_snack(self, snack):
        self.snacks.append(snack)

    def show_snacks(self):
        print("Available Snacks:")
        for idx, snack in enumerate(self.snacks, start=1):
            snack.show_details()

    def book_snack(self, snack_name, quantity):
        for snack in self.snacks:
            if snack.name == snack_name:
                total_price = snack.price * quantity
                print(f"Booked {quantity} of '{snack_name}'. Total price: ₹{total_price}")
                return
        print("Snack not found!")


def main():
    
    snack_booking_system = SnackBooking()

    
    snack1 = Snack("Popcorn", 150)
    snack2 = Snack("Soda", 100)
    snack3 = Snack("Nachos", 200)
    snack4 = Snack("Chocolate", 50)

    
    snack_booking_system.add_snack(snack1)
    snack_booking_system.add_snack(snack2)
    snack_booking_system.add_snack(snack3)
    snack_booking_system.add_snack(snack4)

    
    snack_booking_system.show_snacks()

    
    snack_booking_system.book_snack("Popcorn", 2)
    snack_booking_system.book_snack("Soda", 3)
    snack_booking_system.book_snack("Nachos", 1)
    snack_booking_system.book_snack("Chocolate", 5)

    
    snack_booking_system.book_snack("Chips", 2)


if __name__ == "__main__":
    main()