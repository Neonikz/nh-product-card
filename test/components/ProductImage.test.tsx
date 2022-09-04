import React from 'react';
import renderer from 'react-test-renderer'
import { ProductCard } from '../../src/components/ProductCard';
import { ProductImage } from '../../src/components/ProductImage';
import { ProductTitle } from '../../src/components/ProductTitle';
import { product2 } from '../data/products';



describe('ProductImage Test', () => { 

    test('should show the component with its custom title', () => { 

        const wrapper = renderer.create(
            <ProductImage img="https://hola.jpg" />
        )
            expect(wrapper.toJSON()).toMatchSnapshot()
        })
        
        test('should show the component with its product name', () => {
            const wrapper = renderer.create(
                <ProductCard product={product2}>
                    {
                        () => (
                            <ProductTitle />
                        )
                    }
                </ProductCard>
            )
                expect(wrapper.toJSON()).toMatchSnapshot()
            
     })

 })
