import React, { useEffect, useState } from 'react';
import './ProductAttributes.css';

interface ProductAttributesProps {
    attributes: {
        id: string;
        name: string;
        value: string;
    }[];
    setSelectedAttributes: React.Dispatch<React.SetStateAction<{ id: string; name: string; value: string; selected: boolean }[]>>
}

const ProductAttributes: React.FC<ProductAttributesProps> = ({ attributes, setSelectedAttributes }) => {
    const [selectedAttributes, setSelectedAttributesState] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        const selected = attributes.map(attr => ({
            id: attr.id,
            name: attr.name,
            value: selectedAttributes[attr.name] || '',
            selected: selectedAttributes[attr.name] === attr.value
        })).filter(attr => attr.value !== '');
        setSelectedAttributes(selected);
    }, [selectedAttributes, attributes, setSelectedAttributes]);

    const handleAttributeSelect = (name: string, value: string) => {
        setSelectedAttributesState({ ...selectedAttributes, [name]: value });
    };

    const uniqueAttributeNames = Array.from(new Set(attributes.map(attr => attr.name)));

    return (
        <div className="product-attributes">
            {uniqueAttributeNames.map((name, index) => {
                const attributeValues = attributes.filter(attr => attr.name === name).map(attr => attr.value);
                const kebabCaseName = name.toLowerCase().split(' ').join('-');

                return (
                    <div key={index} className="attribute-selector" data-testid={`product-attribute-${kebabCaseName}`}>
                        <span>{name.toUpperCase()}:</span>
                        {name.toLowerCase() === 'color' ? (
                            <div className="color-swatches">
                                {attributeValues.map((value, idx) => (
                                    <button
                                        key={idx}
                                        style={{ backgroundColor: value }}
                                        className={selectedAttributes[name] === value ? 'color-button selected' : 'color-button'}
                                        onClick={() => handleAttributeSelect(name, value)}
                                    />
                                ))}
                            </div>
                        ) : (
                            attributeValues.map((value, idx) => (
                                <button
                                    key={idx}
                                    className={selectedAttributes[name] === value ? 'attribute-button selected' : 'attribute-button'}
                                    onClick={() => handleAttributeSelect(name, value)}
                                >
                                    {value}
                                </button>
                            ))
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default ProductAttributes;