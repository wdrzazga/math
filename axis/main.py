import pygame
from pygame import Surface


def draw(min: float, max: float, numbers: list[float]):
    pygame.init()
    screen = pygame.display.set_mode((800, 600), pygame.DOUBLEBUF)

    pygame.draw.line(screen, (255, 0, 0), (0, 300), (800, 300))
    draw_number(screen, min, 5)
    draw_number(screen, max, 800 - 5)

    for n in numbers:
        pos = (n - min) * 800 / (max - min)
        draw_number(screen, n, pos)

    pygame.display.flip()


def draw_number(screen: Surface, number: float, text_x: float):
    font = pygame.font.Font(None, 20)
    text_surface = font.render(str(number), True, (255, 255, 255))
    text_rect = text_surface.get_rect(center=(text_x, 310))
    screen.blit(text_surface, text_rect)


def wait_key_pressed():
    running = True
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            elif event.type == pygame.KEYDOWN:
                running = False


if __name__ == '__main__':
    min = input("Podaj minimalna wartosc ")
    max = input("Podaj maksymalna wartosc ")
    numbers = []

    numbers_amount = int(input("ile liczb"))

    for number in range(numbers_amount):
        x = input("Jaka liczba ?")
        numbers.append(float(x))

    draw(float(min), float(max), numbers)
    wait_key_pressed()
