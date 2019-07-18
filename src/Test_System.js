export const isValidMove_ENGINE = (turn, board, x=0, y=0) => {

    let player = `${turn ? '•' : 'O'}`;
    let enemy  = `${!turn ? '•' : 'O'}`;

    console.log(`You move here: ${board[x][y]} ~~~~ x: ${x}; y: ${y}`);

    // Going Left
    if(x > 0){
        if(board[x-1][y] === enemy){
            for(let i = x - 2;i >= 0; i--){
            if(board[i][y] === null){
                break;
            }
            if(board[i][y] === player){
                console.log(`LEFT PLAYER ${board[i][y]}, x: ${i}; y: ${y}`)
                return true;
            }
            }
        }
    }

    // Going right
    if(x < 7){
        if(board[x+1][y] === enemy){ 
            for(let i = x + 2;i < 8; i++){
            if(board[i][y] === null){
                break;
            }
            if(board[i][y] === player){
                console.log(`RIGHT PLAYER ${board[i][y]}, x: ${i}; y: ${y}`)
                return true;
            }
            }
        }
    }

    // Going down
    if(y < 7){
        if(board[x][y+1] === enemy){
            for(let i = y + 2;i < 8; i++){
            if(board[x][i] === null){
                break;
            }
            if(board[x][i] === player){
                console.log(`DOWN PLAYER ${board[x][i]}, x: ${x}; y: ${i}`);
                return true;
            }
            }
        }
    }

    // Going up
    if (y > 0){
        if(board[x][y-1] === enemy){
            for(let i = y - 2;i >= 0; i--){
            if(board[x][i] === null){
                break;
            }
            if(board[x][i] === player){
                console.log(`UP PLAYER ${board[x][i]}, x: ${x}; y: ${i}`);
                return true;
            }
            }
        }
    }

    // Going Up-Left
    if(y > 0 && x > 0){
        if(board[x-1][y-1] === enemy){
            for(let i = 2; i < 8; i++){
                if(x - i < 0|| y - i < 0){
                    break;
                }
                if(board[x-i][y-i] === null){
                    break;
                }
                if(board[x-i][y-i] === player){
                    console.log(`UP-LEFT PLAYER ${board[x-i][y-i]}, x:${x-i}; y:${y-i}`);
                    return true;
                }
            }
        }
    }

    // Going UP-RIGHT
    if(y > 0 && x < 7){
        if(board[x+1][y-1] === enemy){
            for(let i = 2; i < 8; i++){
                if( x + i > 8 || y - i < 0){
                    break;
                }
                if(board[x + i][y - i] === null){
                    break;
                }
                if(board[x + i][y - i] === player){
                    console.log(`UP-RIGHT PLAYER ${board[x + i][y - i]}, x:${x + i}; y:${y - i}`);
                    return true;
                }
            }
        }
    }

    // Going DOWN-RIGHT
    if(y < 7 && x < 7){
        if(board[x + 1][y + 1] === enemy){
            for(let i = 2; i < 8; i++){
                if( x + i > 8 || y + i > 8){
                    break;
                }
                if(board[x + i][y + i] === null){
                    break;
                }
                if(board[x + i][y + i] === player){
                    console.log(`DOWN-RIGHT PLAYER ${board[x + i][y + i]}, x:${x + i}; y:${y + i}`);
                    return true;
                }
            }
        }
    }

    // Going DOWN-LEFT
    if(y < 7 && x > 0){
        if(board[x - 1][y + 1] === enemy){
            for(let i = 2; i < 8; i++){
                if( x - i > 8 || y + i > 8){
                    break;
                }
                if(board[x - i][y + i] === null){
                    break;
                }
                if(board[x - i][y + i] === player){
                    console.log(`DOWN-LEFT PLAYER ${board[x - i][y + i]}, x:${x - i}; y:${y + i}`);
                    return true;
                }
            }
        }
    }


    return false
}

export const makeMove_ENGINE = (turn, board, x, y) => {
    let player = `${turn ? '•' : 'O'}`;
    let enemy  = `${!turn ? '•' : 'O'}`;

    // Going Left
    let left = null;
    if(x > 0){
        if(board[x-1][y] === enemy){
            for(let i = x - 2; i >= 0; i--){
                if(board[i][y] === null){
                    break;
                }
                if(board[i][y] === player){
                    console.log(`LEFT PLAYER ${board[i][y]}, x: ${i}; y: ${y}`)
                    board[x][y] = player;
                    left = i;
                    break;
                }
            }
            if(left !== null){
                for(let i = x - 1; i > left; i--){
                    board[i][y] = player
                }
            }
        }
    }

    // Going Right
    let right = null;
    if(x < 7){
        if(board[x+1][y] === enemy){
            for(let i = x + 2;i < 8; i++){
                if(board[i][y] === null){
                    break;
                }
                if(board[i][y] === player){
                    console.log(`RIGHT PLAYER ${board[i][y]}, x: ${i}; y: ${y}`)
                    board[x][y] = player;
                    right = i;
                    break;
                }
            }
            if(right !== null){
                for(let i = x + 1; i < right; i++){
                    board[i][y] = player
                }
            }
        }
    }

    // Going down
    let down = null;
    if(y > 0){
        if(board[x][y-1] === enemy){
            for(let i = y - 2;i >= 0; i--){
                if(board[x][i] === null){
                    break;
                }
                if(board[x][i] === player){
                    console.log(`DOWN PLAYER ${board[i][y]}, x: ${i}; y: ${y}`)
                    board[x][y] = player;
                    down = i;
                    break;
                }
            }
            if(down !== null){
                for(let i = y - 1; i > down; i--){
                    board[x][i] = player
                }
            }
        }
    }

    // Going Up
    let up = null;
    if(y < 7){
        if(board[x][y+1] === enemy){
            for(let i = y + 2;i < 8; i++){
                if(board[x][i] === null){
                    break;
                }
                if(board[x][i] === player){
                    console.log(`up PLAYER ${board[i][y]}, x: ${i}; y: ${y}`)
                    board[x][y] = player;
                    up = i;
                    break;
                }
            }
            if(up !== null){
                for(let i = y + 1; i < up; i++){
                    board[x][i] = player
                }
            }
        }
    }

    // Going Down-Right
    let dr = null;
    if(y > 0 && x > 0){
        if(board[x - 1][y - 1] === enemy){
            for(let i = 2; i < 8; i++){
                if(x - i < 0|| y - i < 0){
                    break;
                }
                if(board[x - i][y - i] === null){
                    break;
                }
                if(board[x - i][y - i] === player){
                    board[x][y] = player;
                    dr = i;
                    break;
                }
            }
            if(dr !== null){
                for(let i = 1; i < dr; i++){
                    board[x - i][y - i] = player
                }
            }
        }
    }

    // Going Down-Left
    let dl = null;
    if(x < 7 && y > 0){
       if(board[x + 1][y - 1] === enemy){
           for(let i = 2; i < 8; i++){
                if(board[x + i][y - i] === null){
                    break;
                }
                if(board[x + i][y - i] === enemy){
                    break;
                }
                if(board[x + i][y - i] === player){
                    board[x][y] = player;
                    dl = i;
                    break;
                } 
            }
            for(let i = 1; i < dl; i++){
                board[x + i][y - i] = player;
            }
       }
    }

    // Going Up-Right
    let ur = null;
    if(x > 0 && y < 7){
        if(board[x - 1][y + 1] === enemy){
            for(let i = 2; i < 8; i++){
                if(board[x - i][y + i] === null){
                    break;
                }
                if(board[x - i][y + i] === enemy){
                    break;
                }
                if(board[x - i][y + i] === player){
                    board[x][y] = player;
                    ur = i;
                    break;
                }
            }
            for(let i = 1; i < ur; i++){
                board[x - i][y + i] = player;
            }
        }
    }

    // Going Up-Left
    let ul = null
    if(x < 7 && y < 7){
        if(board[x + 1][y + 1] === enemy){
            for(let i = 2; i < 8; i++){
                if(board[x + i][y + i] === null){
                    break;
                }                
                if(board[x + i][y + i] === enemy){
                    break;
                }       
                if(board[x + i][y + i] === player){
                    board[x][y] = player;
                    ul = i;
                    break;
                }       
            }
            for(let i = 1; i < ul; i++){
                board[x + i][y + i] = player;
            }
        }
    }
}
