export class Core {
    level: number;
    space: number;
    usedSpace: number;

    constructor (level=1,space=25,usedSpace=0) {
        this.level=level;
        this.space=space;
        this.usedSpace=usedSpace;
    }

    /**
     * Updates the amount of used space
     * @param amt : the number by which to update used space
     */
    useSpace(amt:number) {
        this.usedSpace += amt;
    }
}