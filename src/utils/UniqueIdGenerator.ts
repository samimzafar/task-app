// src/utils/UniqueIdGenerator.ts
class UniqueIdGenerator {
    private static instance: UniqueIdGenerator;
    private currentId: number;
  
    private constructor() {
      this.currentId = 0;
    }
  
    public static getInstance(): UniqueIdGenerator {
      if (!UniqueIdGenerator.instance) {
        UniqueIdGenerator.instance = new UniqueIdGenerator();
      }
      return UniqueIdGenerator.instance;
    }
  
    public getNextId(): string {
      this.currentId += 1;
      return this.currentId.toString();
    }
  }
  
  export default UniqueIdGenerator;
  