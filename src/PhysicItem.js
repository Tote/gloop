import GloopItem    from "./GloopItem.js"

export default class PhysicItem extends GloopItem {
    constructor(){
        super()
        this.vx = 0
        this.vy = 0
        this.ax = 0
        this.ay = 0
        this.changedAx = false
        this.changedAy = false
    }

    next(){
        this.vx += this.changedAx? this.ax / 2 : this.ax
        this.vy += this.changedAy? this.ay / 2 : this.ay
        this.x += this.vx
        this.y += this.vy

        this.restitution = 0.2
        this.threshold = 0.2

        this.changedAx = this.changedAy = false
    }

    move({vx, vy, ax, ay}){
        this.vx = vx ?? this.vx
        this.vy = vy ?? this.vy
        this.ax = ax ?? this.ax 
        this.ay = ay ?? this.ay

        if(ax !== undefined){
            this.changedAx = true
        }
        if(ay !== undefined){
            this.changedAy = true
        }
    }

    collidesWith( other ){
        
        if (this.bottom() <= other.top()
            || this.top() >= other.bottom()
            || this.right() <= other.left()
            || this.left() >= other.right()) {
            return false
        } else {
            return true
        }
    }

    ellasticCollision( other ){
        const dx = (other.centerX() - this.centerX()) / (other.w / 2 )
        const dy = (other.centerY() - this.centerY()) / (other.h / 2)


        if(Math.abs(Math.abs(dx) - Math.abs(dy)) < this.threshold){
            if( dx < 0){
                this.x = other.right()
            } else {
                this.x = other.left() - this.w
            }
            if( dy < 0 ){
                this.y = other.bottom()
            } else {
                this.y = other.top() - this.h
            }

            this.vx = -this.vx * other.restitution
            if( Math.abs(this.vx) < this.threshold){
                this.vx = 0
            }
        }

        if( Math.abs(dx) > Math.abs(dy)){
            if( dx < 0){
                this.x = other.right()
            } else {
                this.x = other.left() - this.w
            }

            this.vx = - (this.vx * other.restitution)
            if( Math.abs(this.vx) < this.threshold){
                this.vx = 0
            }
        } else {
            if( dy < 0){
                this.y = other.bottom()
            } else {
                this.y = other.top() - this.h
            }

            this.vy = - (this.vy * other.restitution)
            if( Math.abs(this.vy) < this.threshold){
                this.vy = 0
            }
        }
    }

    inellasticCollision( other ){
        const dx = (other.centerX() - this.centerX()) / (other.w / 2 )
        const dy = (other.centerY() - this.centerY()) / (other.h / 2)


        if(Math.abs(Math.abs(dx) - Math.abs(dy)) < this.threshold){
            if( dx < 0){
                this.x = other.right()
            } else {
                this.x = other.left() - this.w
            }
            if( dy < 0 ){
                this.y = other.bottom()
            } else {
                this.y = other.top() - this.h
            }

            this.vx = 0
        }

        if( Math.abs(dx) > Math.abs(dy)){
            if( dx < 0){
                this.x = other.right()
            } else {
                this.x = other.left() - this.w
            }

            this.vx = 0
            if( Math.abs(this.vx) < this.threshold){
                this.vx = 0
            }
        } else {
            if( dy < 0){
                this.y = other.bottom()
            } else {
                this.y = other.top() - this.h
            }
            this.vy = 0
        }
    }

    stop(){
        this.ax = this.ay = 0
        this.vx = this.vy = 0
    }

    boundaries(){
        return {
            top     : this.top(),
            bottom  : this.bottom(),
            left    : this.left(),
            right   : this.right()
        }
    }
}