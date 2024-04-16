export class Game {
    public players: string[] = [];
    public stack: string[] = [];
    public playedCard: string[] = [];
    public currentPlayer: number = -1;
    public btn: boolean = false;

    constructor() {
        // push all cards in 'stack-array'
        for (let i = 1; i < 14; i++) {
            this.stack.push(`ace_${i}`)
            this.stack.push(`clubs_${i}`)
            this.stack.push(`diamonds_${i}`)
            this.stack.push(`hearts_${i}`)
        }

        this.shuffle(this.stack)
    }

    // shuffle array with cards
    shuffle(array: any) {
        let currentIndex = array.length;
        while (currentIndex != 0) {
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      }
}