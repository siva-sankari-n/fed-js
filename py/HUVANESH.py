class Movie:
    def __init__(self, title, duration, ticket_price):
        self.title = title
        self.duration = duration
        self.ticket_price = ticket_price
        self.available_tickets = 100 

    def book_ticket(self, number_of_tickets):
        if number_of_tickets <= self.available_tickets:
            self.available_tickets -= number_of_tickets
            total_price = number_of_tickets * self.ticket_price
            print(f"{number_of_tickets} tickets booked for '{self.title}'. Total price: ₹{total_price}")
        else:
            print(f"Sorry, only {self.available_tickets} tickets available for '{self.title}'.")

    def show_details(self):
        print(f"Movie: {self.title}")
        print(f"Duration: {self.duration} minutes")
        print(f"Ticket Price: ₹{self.ticket_price}")
        print(f"Available Tickets: {self.available_tickets}")

class Theatre:
    def __init__(self, name):
        self.name = name
        self.movies = []

    def add_movie(self, movie):
        self.movies.append(movie)

    def show_movies(self):
        print(f"Movies currently showing in {self.name}:")
        for idx, movie in enumerate(self.movies, start=1):
            print(f"{idx}. {movie.title}")

    def book_movie_ticket(self, movie_title, number_of_tickets):
        for movie in self.movies:
            if movie.title == movie_title:
                movie.book_ticket(number_of_tickets)
                return
        print("Movie not found!")

def main():

    my_theatre = Theatre("City Cinema")

   
    movie1 = Movie("The Great Escape", 120, 300)
    movie2 = Movie("The Silent Valley", 140, 350)
    movie3 = Movie("Adventure Time", 130, 250)

    my_theatre.add_movie(movie1)
    my_theatre.add_movie(movie2)
    my_theatre.add_movie(movie3)

    my_theatre.show_movies()

   
    my_theatre.book_movie_ticket("The Great Escape", 2)
    my_theatre.book_movie_ticket("Adventure Time", 5)

   
    print("\nMovie details after booking:")
    for movie in my_theatre.movies:
        movie.show_details()


if __name__ == "__main__":
    main()

