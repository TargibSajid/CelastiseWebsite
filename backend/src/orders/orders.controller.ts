import { Body, Controller, Post } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
@Controller('orders')
export class OrdersController { constructor(private db: DatabaseService){} @Post() async create(@Body() body:any){ const r=await this.db.execute('INSERT INTO orders (customer_name,phone,address,house_no,payment_method,total,status) VALUES (?,?,?,?,?,?,?)',[body.customer_name,body.phone,body.address,body.house_no,body.payment_method,body.total,'pending']); for(const item of body.items || []) await this.db.execute('INSERT INTO order_items (order_id,product_id,quantity,price) VALUES (?,?,?,?)',[r.insertId,item.product_id,item.quantity,item.price]); return { order_id:r.insertId, status:'pending' }; } }
