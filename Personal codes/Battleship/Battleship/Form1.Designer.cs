using System;
using System.Windows.Forms;

namespace BattleshipGame
{
    public partial class BattleshipForm : Form
    {
        private const int GridSize = 10;
        private Button[,] playerGridButtons;
        private Button[,] computerGridButtons;
        private int[,] playerGrid;
        private int[,] computerGrid;
        private bool isPlacingShips = true;
        private bool isAttacking = false;
        private int[] shipSizes = { 5, 4, 3, 3, 2 }; // Ship sizes: Carrier, Battleship, Submarine, Destroyer, Patrol
        private int currentShipIndex = 0; // Track which ship the player is placing
        private Random rand = new Random();

        public BattleshipForm()
        {
            InitializeComponent();
            InitializeGrids();
        }

        private void InitializeGrids()
        {
            // Initialize player and computer grids
            playerGridButtons = new Button[GridSize, GridSize];
            computerGridButtons = new Button[GridSize, GridSize];
            playerGrid = new int[GridSize, GridSize];
            computerGrid = new int[GridSize, GridSize];

            // Create the Player Grid Buttons
            for (int row = 0; row < GridSize; row++)
            {
                for (int col = 0; col < GridSize; col++)
                {
                    Button btn = new Button();
                    btn.Size = new System.Drawing.Size(30, 30);
                    btn.Location = new System.Drawing.Point(30 + col * 30, 30 + row * 30);
                    btn.Tag = new Tuple<int, int>(row, col); // Store row and col
                    btn.Click += PlayerGrid_Click;
                    playerGridButtons[row, col] = btn;
                    this.Controls.Add(btn);
                }
            }

            // Create the Computer Grid Buttons
            for (int row = 0; row < GridSize; row++)
            {
                for (int col = 0; col < GridSize; col++)
                {
                    Button btn = new Button();
                    btn.Size = new System.Drawing.Size(30, 30);
                    btn.Location = new System.Drawing.Point(400 + col * 30, 30 + row * 30);
                    btn.Tag = new Tuple<int, int>(row, col); // Store row and col
                    btn.Click += ComputerGrid_Click;
                    computerGridButtons[row, col] = btn;
                    this.Controls.Add(btn);
                }
            }

            // Add button to start the attack phase
            Button startButton = new Button();
            startButton.Text = "Start Attack Phase";
            startButton.Location = new System.Drawing.Point(200, 350);
            startButton.Click += StartButton_Click;
            this.Controls.Add(startButton);
        }

        // Handles player's clicks to place ships on their grid
        private void PlayerGrid_Click(object sender, EventArgs e)
        {
            if (!isPlacingShips || currentShipIndex >= shipSizes.Length) return;

            Button btn = (Button)sender;
            var pos = (Tuple<int, int>)btn.Tag;
            int row = pos.Item1;
            int col = pos.Item2;

            // Place the current ship on the grid
            int shipSize = shipSizes[currentShipIndex];
            if (CanPlaceShip(playerGrid, row, col, shipSize, true)) // Horizontal placement for simplicity
            {
                PlaceShip(playerGrid, row, col, shipSize, true);
                btn.BackColor = System.Drawing.Color.Blue;
                currentShipIndex++;

                if (currentShipIndex >= shipSizes.Length)
                {
                    MessageBox.Show("All ships placed! Ready to start.");
                    isPlacingShips = false;
                }
            }
        }

        // Handles clicks on the computer's grid during the attack phase
        private void ComputerGrid_Click(object sender, EventArgs e)
        {
            if (!isAttacking) return;

            Button btn = (Button)sender;
            var pos = (Tuple<int, int>)btn.Tag;
            int row = pos.Item1;
            int col = pos.Item2;

            // Attack computer grid
            if (computerGrid[row, col] == 1)
            {
                btn.BackColor = System.Drawing.Color.Red; // Hit
                computerGrid[row, col] = -1; // Mark as hit
                MessageBox.Show("Hit!");
            }
            else
            {
                btn.BackColor = System.Drawing.Color.Gray; // Miss
                computerGrid[row, col] = -1; // Mark as attacked
                MessageBox.Show("Miss!");
            }

            ComputerAttack();
        }

        // Handles the start of the attack phase
        private void StartButton_Click(object sender, EventArgs e)
        {
            if (currentShipIndex < shipSizes.Length)
            {
                MessageBox.Show("Please place all your ships first!");
                return;
            }

            PlaceComputerShips(); // Randomly place computer's ships
            isAttacking = true;
            MessageBox.Show("Attack phase started!");
        }

        // Randomly places computer's ships
        private void PlaceComputerShips()
        {
            foreach (int size in shipSizes)
            {
                bool placed = false;

                while (!placed)
                {
                    int row = rand.Next(GridSize);
                    int col = rand.Next(GridSize);
                    bool horizontal = rand.Next(2) == 0;

                    if (CanPlaceShip(computerGrid, row, col, size, horizontal))
                    {
                        PlaceShip(computerGrid, row, col, size, horizontal);
                        placed = true;
                    }
                }
            }
        }

        // Checks if a ship can be placed at the given coordinates
        private bool CanPlaceShip(int[,] grid, int row, int col, int size, bool horizontal)
        {
            if (horizontal)
            {
                if (col + size > GridSize) return false;
                for (int i = 0; i < size; i++)
                {
                    if (grid[row, col + i] != 0) return false;
                }
            }
            else
            {
                if (row + size > GridSize) return false;
                for (int i = 0; i < size; i++)
                {
                    if (grid[row + i, col] != 0) return false;
                }
            }
            return true;
        }

        // Places a ship on the grid
        private void PlaceShip(int[,] grid, int row, int col, int size, bool horizontal)
        {
            for (int i = 0; i < size; i++)
            {
                if (horizontal)
                {
                    grid[row, col + i] = 1; // Mark as occupied
                }
                else
                {
                    grid[row + i, col] = 1; // Mark as occupied
                }
            }
        }

        // Computer's random attack on the player's grid
        private void ComputerAttack()
        {
            bool attacked = false;

            while (!attacked)
            {
                int row = rand.Next(GridSize);
                int col = rand.Next(GridSize);

                if (playerGrid[row, col] == 1)
                {
                    playerGridButtons[row, col].BackColor = System.Drawing.Color.Red; // Hit
                    playerGrid[row, col] = -1; // Mark as hit
                    MessageBox.Show("Computer hit your ship!");
                    attacked = true;
                }
                else if (playerGrid[row, col] == 0)
                {
                    playerGridButtons[row, col].BackColor = System.Drawing.Color.Gray; // Miss
                    playerGrid[row, col] = -1; // Mark as attacked
                    MessageBox.Show("Computer missed!");
                    attacked = true;
                }
            }
        }
    }
}
