import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ref, push, set, get, update, remove } from 'firebase/database'
import { firebaseDataBase } from '../firestore.config'

@Injectable()
export class UsersService {

  async create(createUserDto: CreateUserDto) {
    const dataRef = ref(firebaseDataBase, 'Users')
    const newElementRef = push(dataRef, { dataRef: createUserDto })
    await set(newElementRef, createUserDto)
    return { id: newElementRef.key, ...createUserDto };
  }

  async findAll() {
    const dataRef = ref(firebaseDataBase, 'Users');
    const snapshot = await get(dataRef);
    if (!snapshot.exists()) {
      return [];
    }
    return snapshot.val();
  }

  async findOne(id: string) {
    const dataRef = ref(firebaseDataBase, `Users/${id}`);
    const snapshot = await get(dataRef);
    if (!snapshot.exists()) {
      throw new Error(`El usuario con ID ${id} no fue encontrado`);
    }
    return { id, ...snapshot.val() };
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const dataRef = ref(firebaseDataBase, `Users/${id}`);
    const snapshot = await get(dataRef);
    if (!snapshot.exists()) {
      throw new Error(`El usuario con ID ${id} no fue encontrado`);
    }
    await update(dataRef, updateUserDto);
    return { id, ...updateUserDto };
  }

  async remove(id: string) {
    const dataRef = ref(firebaseDataBase, `Users/${id}`);
    const snapshot = await get(dataRef);
    if (!snapshot.exists()) {
      throw new Error(`User with ID ${id} not found`);
    }
    await remove(dataRef);
    return { message: `User with ID ${id} removed successfully` };
  }
}
